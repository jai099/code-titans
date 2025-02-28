const college = require("../models/collegeModel");


// they are college
exports.signupCollege = async (req, res) => {
    try {
      const {
        name,
        email,
        number,
        dob,
        state_of_origin,
        address,
        fatherName,
        occupation,
        annualIncome,
        motherName,
        occupationMother,
        annualIncomeMother,
        uniqueId,
      } = req.body;
  
      const newCollege = new college({
        name,
        email,
        number,
        dob,
        state_of_origin,
        address,
        fatherName,
        occupation,
        annualIncome,
        motherName,
        occupationMother,
        annualIncomeMother,
        uniqueId,
      });
  
      const savedCollege = await newCollege.save(); 
  
      res.status(201).json({
        success: true,
        message: "College signup successful",
        college: savedCollege,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  

exports.getAllColleges = async (req, res) => {
    try {
      const colleges = await college.find();
      res.status(200).json({
        success: true,
        colleges,
      });
    } catch (error) {
      console.error("Error in getAllColleges:", error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message, 
      });
    }
  };