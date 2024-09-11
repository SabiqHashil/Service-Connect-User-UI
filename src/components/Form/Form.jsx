import { useState } from "react";
import ButtonComp from "../Common/Button";
import InputComp from "../Common/Input";
import { FaCalendarAlt, FaChevronDown, FaEnvelope } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    dob: "",
    email: "",
    phoneNumber: "",
    gender: "",
    houseName: "",
    landMark: "",
    pinCode: "",
    district: "",
    state: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.dob) errors.dob = "Date of Birth is required";
    if (!formData.email.includes("@")) errors.email = "Invalid email";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.houseName) errors.houseName = "House name is required";
    if (!formData.landMark) errors.landMark = "Land mark is required";
    if (!formData.pinCode) errors.pinCode = "Pin code is required";
    if (!formData.district) errors.district = "District is required";
    if (!formData.state) errors.state = "State is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully.", formData);
    }
  };

  const errorTextClass = "text-red-500 text-sm";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl my-6 font-bold text-center">
          Fill Your Profile
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-4"
        >
          <div>
            <InputComp
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              name="fullName"
            />
            {errors.fullName && (
              <p className={errorTextClass}>{errors.fullName}</p>
            )}
          </div>
          <div>
            <InputComp
              type="text"
              placeholder="Address"
              onChange={handleChange}
              name="address"
            />
            {errors.address && (
              <p className={errorTextClass}>{errors.address}</p>
            )}
          </div>
          <div>
            <InputComp
              type="date"
              placeholder="Date of Birth"
              onChange={handleChange}
              name="dob"
              icon={FaCalendarAlt}
            />
            {errors.dob && <p className={errorTextClass}>{errors.dob}</p>}
          </div>
          <div>
            <InputComp
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              icon={FaEnvelope}
            />
            {errors.email && <p className={errorTextClass}>{errors.email}</p>}
          </div>
          <div>
            <InputComp
              type="tel"
              placeholder="Phone Number"
              onChange={handleChange}
              name="phoneNumber"
            />
            {errors.phoneNumber && (
              <p className={errorTextClass}>{errors.phoneNumber}</p>
            )}
          </div>
          <div className="relative">
            {/* Gender Select */}
            <select
              name="gender"
              onChange={handleChange}
              className="border pl-4 bg-custom-gray rounded-md w-full h-[60px] focus:outline-none focus:ring-2 text-white placeholder-white focus:ring-blue-500 appearance-none"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {/* Icon for the dropdown */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaChevronDown className="text-white text-xl" />
            </div>
            {errors.gender && <p className={errorTextClass}>{errors.gender}</p>}
          </div>
          <div>
            <InputComp
              type="text"
              placeholder="House Name"
              onChange={handleChange}
              name="houseName"
            />
            {errors.houseName && (
              <p className={errorTextClass}>{errors.houseName}</p>
            )}
          </div>
          <div>
            <InputComp
              type="text"
              placeholder="Land mark"
              onChange={handleChange}
              name="landMark"
            />
            {errors.landMark && (
              <p className={errorTextClass}>{errors.landMark}</p>
            )}
          </div>
          <div>
            <InputComp
              type="number"
              placeholder="Pin code"
              onChange={handleChange}
              name="pinCode"
            />
            {errors.pinCode && (
              <p className={errorTextClass}>{errors.pinCode}</p>
            )}
          </div>
          <div>
            <InputComp
              type="text"
              placeholder="District"
              onChange={handleChange}
              name="district"
            />
            {errors.district && (
              <p className={errorTextClass}>{errors.district}</p>
            )}
          </div>
          <div>
            <InputComp
              type="text"
              placeholder="State"
              onChange={handleChange}
              name="state"
            />
            {errors.state && <p className={errorTextClass}>{errors.state}</p>}
          </div>
          <div className="flex  items-center justify-center">
            <ButtonComp
              text="Continue"
              icon={BiRightArrowAlt}
              iconPosition="after"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
