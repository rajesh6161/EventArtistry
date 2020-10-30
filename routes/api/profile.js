const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["firstname", "lastname"]);
    console.log(req.user.id);
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Create a new profile

router.post(
  "/",
  [
    auth,
    [
     
      check("age", "Please enter your age").not().isEmpty(),
      check("gender", "Please define your gender").not().isEmpty(),
      check("weight", "Please enter your weight").not().isEmpty(),
      check("height", "Please enter your height").not().isEmpty(),
      check("location", "Please enter your current city").not().isEmpty(),
      check("phone", "Please enter your phone number").not().isEmpty(),
      check("education", "Please select your education status").not().isEmpty(),
      check("status", "Please choose your experience level").not().isEmpty(),
     
      check("languages", "Enter languages you know").not().isEmpty(),
      check("profiletype", "Select your profile type").not().isEmpty(),
      check(
        "englishproficiency",
        "Tell us how much proficient you are in english",
      )
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      age,
      gender,
      height,
      weight,
      location,
      phone,
      bio,
      status,
      education,
      profiletype,
      languages,
      englishproficiency,
      locationprefer,
      twitter,
      instagram,
      linkedin,
      facebook,
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
  
    if (age) profileFields.age = age;
    if (gender) profileFields.gender = gender;
    if (height) profileFields.height = height;
    if (weight) profileFields.weight = weight;
    if (location) profileFields.location = location;
    if (phone) profileFields.phone = phone;
    if (bio) profileFields.bio = bio;

    if (education) profileFields.education = education;
    if (status) profileFields.status = status;

    if (profiletype) profileFields.profiletype = profiletype;

    
    if (languages) {
      profileFields.languages = languages
        .split(",")
        .map((language) => language.trim());
    }

    if(locationprefer) profileFields.locationprefer = locationprefer;
 
    if (englishproficiency) {
      profileFields.englishproficiency = englishproficiency;
    }

    // Build social object
    profileFields.social = {};

    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;
    if (linkedin) profileFields.social.linkedin = linkedin;

    try {
      let profile = Profile.findOne({
        user: req.user.id, //comes from the token
      });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          {
            user: req.user.id,
          },
          { $set: profileFields },
          { new: true, upsert: true },
        );
        return res.json(profile);
      }
      // Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "firstname",
      "lastname",
     
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user id
// @access   Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["firstname", "lastname",]);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    // Remove user posts
    //await Post.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// add avatar

router.put('/profilephoto', [
  auth, 
  [
    check("avatar", "Please add a profile photo").not().isEmpty()
  ],
],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { avatar } = req.body

    

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.avatar = avatar;

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }

 
)
module.exports = router;
