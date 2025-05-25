import React from "react";
import Button from '../Button'

export const SignInCard: React.FC = () => {
  return (
    <div className=" px-4 py-6 font-medium space-y-4 mt-5">
      <p className="text-black text-base">
        Log in to see all memories linked to this clothing. Unlock private
        moments, full stories, and your own memory vault.
      </p>
        <Button  title={"Sign In"} onClick={()=>{}}/>
    </div>
  );
};
