import React from "react";
import { FaPhoneAlt, FaVideo, FaRocketchat } from "react-icons/fa";
import FriendInfo from "./FriendInfo";
import Message from "./Message";
import MessageSend from "./MessageSend";
import { toast } from "react-hot-toast";




const RightSide = (props) => {
  const {
    currentfriend,
    inputHendle,
    newMessage,
    sendMessage,
    message,
    scrollRef,
    emojiSend,
    ImageSend,
    activeUser,
    typingMessage,
  } = props;

  return (
    <div className="col-9">
      <div className="right-side">
        <input type="checkbox" id="dot" />
        <div className="row">
          <div className="col-8">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div className="image">
                    <img src={`./image/${currentfriend.image}`} alt="" />

                    {activeUser &&
                    activeUser.length > 0 &&
                    activeUser.some((u) => u.userId === currentfriend._id) ? (
                      <div className="active-icon"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="name">
                    <h3>{currentfriend.userName} </h3>
                  </div>
                </div>

                <div className="icons">
                  <div className="icon">
                    <FaPhoneAlt  onClick={() => toast('This feature is for future scope')} />
                  </div>

                  <div className="icon">
                    <FaVideo  onClick={() => toast('This feature is for future scope')} />
                  </div>

                  <div className="icon">
                    <label htmlFor="dot">
                      {" "}
                      <FaRocketchat />{" "}
                    </label>
                  </div>
                </div>
              </div>

              <Message
                message={message}
                currentfriend={currentfriend}
                scrollRef={scrollRef}
                typingMessage={typingMessage}
              />

              <MessageSend
                inputHendle={inputHendle}
                newMessage={newMessage}
                sendMessage={sendMessage}
                emojiSend={emojiSend}
                ImageSend={ImageSend}
              />
            </div>
          </div>

          <div className="col-4">
            <FriendInfo
              message={message}
              currentfriend={currentfriend}
              activeUser={activeUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
