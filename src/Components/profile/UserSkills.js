import React from "react";
import UserSkillBar from "../Common/UserSkillBar";

export default function UserSkills(props) {
  const { skills = [] } = props;
  return(
    <div>
      {Object.entries(skills).map( ( [index, skill] ) =>
          <UserSkillBar key={index}
                        skill={{type: index, ...skill}}
          />
        )
      }
    </div>
  );
}