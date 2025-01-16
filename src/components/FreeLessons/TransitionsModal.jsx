import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Box,
  Divider
} from "@mui/material";
import { Container, styled } from "@mui/system";
import { countries } from "countries-list"; // Import the package

const TransitionsModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    birthCountry: "",
    currentCountry: "",
    heardFrom: "",
  });

  // Convert countries object into an array
  const countryList = Object.values(countries).map((country) => country.name);

  // Styled radio buttons
  const StyledButton = styled(Button)(({ selected }) => ({
    backgroundColor: selected ? "#008000" : "#f5f5f5", // Change color when selected
    color: selected ? "#fff" : "#000",
    border: "1px solid #ddd",
    margin: "4px",
    borderRadius: "16px",
    padding: "8px 16px",
    "&:hover": {
      backgroundColor: selected ? "#008000" : "#e0e0e0",
    },
  }));

  // Open modal on page load
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, heardFrom: value }));
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log("Form Data Submitted:", formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
      <DialogTitle sx={{color:"#2196f3"}} >

      برجاء تسجيل بياناتك حتي تتمكن من رؤية الدروس المجانية

      </DialogTitle>
      <DialogContent>
        <TextField
          label="الاسم بالكامل"
          fullWidth
          margin="normal"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <TextField
          label="البريد الإلكتروني"
          type="email"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="العمر"
          type="number"
          fullWidth
          margin="normal"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>دولة الميلاد</InputLabel>
          <Select
            name="birthCountry"
            value={formData.birthCountry}
            onChange={handleChange}
          >
            {countryList.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>دولة السكن الحالية</InputLabel>
          <Select
            name="currentCountry"
            value={formData.currentCountry}
            onChange={handleChange}
          >
            {countryList.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box marginTop={2}>
          <div>كيف سمعت عن بارق؟</div>
          <Box display="flex" flexWrap="wrap" justifyContent="space-around" marginTop={1}>
            {["صديق", "وسائل التواصل الاجتماعي", "جوجل", "أخرى"].map((option) => (
              <StyledButton
              sx={{fontSize:"11px"}} 
                key={option}
                selected={formData.heardFrom === option}
                onClick={() => handleRadioChange(option)}
              >
                {option}
              </StyledButton>
            ))}
          </Box>
        </Box>
        <div style={{ display: "flex", justifyContent: "space-evenly" , marginTop: 16 }}>
        <Button className="btn-model" variant="contained" color="primary" onClick={handleSubmit}>
            تسجيل
          </Button>
          <Button className="btn-model" variant="outlined" onClick={() => setOpen(false)}>
            إلغاء
          </Button>
       
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TransitionsModal;
