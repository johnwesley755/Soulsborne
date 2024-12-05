import React, { createContext, useState } from "react";
import { getStudentProfile } from "../services/profileService";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(getStudentProfile());

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
