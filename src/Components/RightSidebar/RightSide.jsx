import React, { useState, useContext } from "react";
import waterslide from "../../assets/images/waterslide.jpg";
import { AuthContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import remove from "../../assets/images/delete.png";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  arrayRemove,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const RightSide = () => {
  const [input, setInput] = useState("");
  const { user, userData } = useContext(AuthContext);
  const friendList = userData?.friends;

  const searchFriends = (data) => {
    return data.filter((item) =>
      item["name"].toLowerCase().includes(input.toLowerCase())
    );
  };

  const removeFriend = async (id, name, image) => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const getDoc = await getDocs(q);
    const userDocumentId = getDoc.docs[0].id;

    await updateDoc(doc(db, "users", userDocumentId), {
      friends: arrayRemove({ id: id, name: name, image: image }),
    });
  };

  return (
    <div className="flex flex-col h-screen bg-white shadow-lg border-2 rounded-l-xl">
      <div className="flex flex-col items-center relative pt-10">
        <img
          className="h-48 rounded-md"
          src="https://instagram.fsdu8-2.fna.fbcdn.net/v/t39.30808-6/398490142_913521570137909_6670672259410822561_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzMjAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fsdu8-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=mjSTAmPhy2sQ7kNvgEBg-Nc&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIyODkyNDcxOTM5ODc1MDY2Mg%3D%3D.2-ccb7-5&oh=00_AfArdHR2T1cSk0GIM6CBurXmgCxgRg8tUaDaPrOYi-CSog&oe=66367181&_nc_sid=ee9879"
          alt="nature"
        ></img>
      </div>
      <p className="font-roboto font-normal text-sm text-gray-700 max-w-fit no-underline tracking-normal leading-tight py-2 mx-2">
        Noite de glória e paixão no Maracanã! O Fluminense, com toda sua raça e
        tradição, conquista pela primeira vez a cobiçada Taça Libertadores da
        América, um feito que ficará marcado para sempre nos corações dos
        tricolores.
      </p>
      <div className="mx-2 mt-10">
        <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
          Friends:{" "}
        </p>
        <input
          className="border-0 outline-none mt-4"
          name="input"
          value={input}
          type="text"
          placeholder="Search friends"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        {friendList?.length > 0 ? (
          searchFriends(friendList)?.map((friend) => {
            return (
              <div
                className="flex items-center justify-between hover:bg-gray-100 duration-300 ease-in-out"
                key={friend.id}
              >
                <Link to={`/profile/${friend.id}`}>
                  <div className="flex items-center my-2 cursor-pointer">
                    <div className="flex items-center">
                      <Avatar
                        size="sm"
                        variant="circular"
                        src={friend?.image || avatar}
                        alt="avatar"
                      ></Avatar>
                      <p className="ml-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
                        {friend.name}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="mr-4">
                  <img
                    onClick={() =>
                      removeFriend(friend.id, friend.name, friend.image)
                    }
                    className="cursor-pointer"
                    src={remove}
                    alt="deleteFriend"
                  ></img>
                </div>
              </div>
            );
          })
        ) : (
          <p className="mt-10 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            Add friends to check their profile
          </p>
        )}
      </div>
    </div>
  );
};

export default RightSide;
