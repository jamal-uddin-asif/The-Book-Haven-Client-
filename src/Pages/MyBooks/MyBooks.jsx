import React, { useState } from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAuth } from "../../Hooks/useAuth";

const MyBooks = () => {
  const { user } = useAuth();

  return (
    <div>
      <MyContainer>
        <div className="my-5 rounded-2xl bg-blue-950/80 min-h-screen"></div>
      </MyContainer>
    </div>
  );
};

export default MyBooks;
