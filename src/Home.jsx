import React, { useEffect, useRef } from "react";
import "./index.css";

// Plugin
import { Switch } from "antd";
import { Input } from "antd";

// Image
import logo from "./images/logo.svg";
import langFr from "./images/fr.svg";
import bellNotif from "./images/cloche-notif.svg";
import avatar from "./images/avatarOnline.svg";
import search from "./images/search.svg";
import cam from "./images/cam.svg";
import plus from "./images/plus.svg";
import border from "./images/border.svg";
import avatar2 from "./images/avatar2.svg";
import avatar3 from "./images/avatarGris.svg";
import avatar4 from "./images/avatar3.svg";
import menu from "./images/menu.svg";
import etire from "./images/etire.svg";
import smallPerson from "./images/smallPerson.png";
import person from "./images/person.png";
import record from "./images/record.svg";
import call from "./images/call.svg";
import cancelCall from "./images/cancelCall.svg";
import addUser from "./images/addUser.svg";
import bi_translate from "./images/bi_translate.svg";
import shareScreen from "./images/shareScreen.svg";
import message from "./images/message.svg";
import cancel from "./images/cancel.svg";
import smiley from "./images/smiley.svg";
import send from "./images/send.svg";

function Home() {
  const dataMessage = [
    {
      name: "Lisa",
      status: "D'accord",
      avatar: avatar2,
      time: "14:23",
      notification: false,
    },
    {
      name: "Lisa",
      status: "D'accord",
      avatar: avatar3,
      time: "14:23",
      notification: true,
    },
    {
      name: "Lisa",
      status: "D'accord",
      avatar: avatar3,
      time: "14:23",
      notification: true,
    },
    {
      name: "Lisa",
      status: "D'accord",
      avatar: avatar3,
      time: "14:23",
      notification: false,
    },
    // {
    //   name: "Lisa",
    //   status: "D'accord",
    //   avatar: avatar3,
    //   time: "14:23",
    //   notification: false,
    // },
    {
      name: "Lisa",
      status: "D'accord",
      avatar: avatar3,
      time: "14:23",
      notification: false,
    },
    {
      name: "Lisa",
      status: "D'accord",
      avatar: avatar3,
      time: "14:23",
      notification: false,
    },
    {
      name: "Lisa",
      status: "D'accord",
      avatar: avatar2,
      time: "14:23",
      notification: false,
    },
    // Ajoutez d'autres objets de données selon vos besoins
  ];
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Déplacer le scroll vers le bas
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, []);
  return (
    <div className="bg-darkColor flex flex-col h-screen w-screen overflow-y-hidden">
      {/* Header */}
      <div className="h-[10%] flex justify-between items-center py-2 px-[54px]">
        <div className="flex gap-[54px] items-center py-[18px] xl:py-[24px]">
          <Switch
            onChange={onChange}
            className="switch-custom"
            style={{
              background: "var(--color-grise)",
            }}
          />
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-[62px] items-center">
          <img src={langFr} alt="logo" />
          <img src={bellNotif} alt="logo" />
          <img src={avatar} alt="logo" />
        </div>
      </div>

      <hr className="divider" />

      {/* Skype */}
      <div className="h-[90%] flex">
        <div className="flex-1 flex flex-col">
          <div className="h-[10%] w-full flex gap-[24px] items-center py-[22px] px-[44px]">
            <div className="w-[8px] h-[8px] rounded-full bg-yellow"></div>
            <p>LiiVE</p>
          </div>
          <div className="h-[90%] flex gap-[10px]">
            {/* Aside */}
            <div className="w-[400px] bg-bgSide flex flex-col">
              <div className="h-[25%] py-[20px] px-[22px] flex flex-col gap-[26px]">
                <Input
                  size="large"
                  placeholder="Contacts, groupes, messages"
                  suffix={<img src={search} alt="logo" />}
                  className="rounded-full bg-search border-0 py-[12px] px-[16px]"
                />
                <div className="flex gap-[4px]">
                  <div className="flex-1 rounded-full p-[7px] flex items-center gap-[20px] border border-border">
                    <img src={cam} alt="logo" />
                    <p>Réunion</p>
                  </div>
                  <div className="flex-1 rounded-full p-[7px] flex items-center gap-[20px] border border-border">
                    <img src={plus} alt="logo" />
                    <p>Conversation</p>
                  </div>
                </div>
              </div>

              <hr className="divider" />
              {/* Liste des messages */}
              <div className="h-[75%] py-[20px] px-[22px] flex flex-col gap-[48px] overflow-y-hidden">
                <div className="h-[10%] flex">
                  <div className="flex-1 flex flex-col gap-[12px] items-center">
                    <div className="flex gap-[8px]">
                      <p className="text-violet">Conversations</p>
                      <p>
                        <sup class="square-text">2</sup>
                      </p>
                    </div>

                    <img src={border} alt="border" />
                  </div>
                  <div className="flex-1 flex flex-col gap-[12px] items-center">
                    <div className="flex gap-[8px]">
                      <p>Groupes</p>
                      <p>
                        <sup class="square-text2">2</sup>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[80%] flex flex-col overflow-y-auto">
                  {dataMessage.map((item, index) => (
                    <div key={index} className="flex p-[16px]">
                      <div className="flex-1 flex gap-[18px]">
                        <img src={item.avatar} alt="avatar2" />
                        <div className="flex flex-col">
                          <p>{item.name}</p>
                          <p className="text-grisText">{item.status}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <p className="text-grisText">{item.time}</p>
                        {item.notification && (
                          <small className="square">1</small>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Video section */}
            <div className="flex-1 flex flex-col">
              <div className="relative video-bloc flex-1 bg-grise flex flex-col">
                <div className="video-bar flex justify-between items-center py-[14px] px-[20px]">
                  <div className="flex gap-[12px]">
                    <img src={menu} width={44} alt="avatar2" />
                    <img src={avatar4} width={44} alt="avatar2" />
                    <div>
                      <p>Lise</p>
                      <p>02:54</p>
                    </div>
                  </div>
                  <div>
                    <img src={etire} alt="avatar2" />
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <img src={smallPerson} alt="Background" />
                </div>
                <div className="absolute flex flex-col justify-center items-center w-full bottom-0">
                  <img src={person} className="max-w-[40%]" alt="Background" />
                  <div className="video-bar w-full flex justify-between items-center py-[14px] px-[20px]">
                    <div className="flex gap-[40px]">
                      <img src={addUser} alt="Background" />
                      <img src={shareScreen} alt="Background" />
                    </div>
                    <div className="flex gap-[40px]">
                      <div className="flex gap-[20px]">
                        <img src={record} alt="Background" />
                        <img src={call} alt="Background" />
                      </div>
                      <img src={cancelCall} alt="Background" />
                    </div>
                    <div className="flex gap-[40px]">
                      <img src={message} alt="Background" />
                      <img src={bi_translate} alt="Background" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[66px] py-[24px] w-full">
                <hr className="divider2" />
                <div className="flex gap-[8px]">
                  <p className="spaced-text">CONNECTING PLATFORM</p>
                  <p>
                    <sup class="square2">€</sup>
                  </p>
                </div>
                <hr className="divider2 rotated-hr" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[400px] flex flex-col p-[16px]">
          <div className="h-[10%]">
            <div className="flex flex-col gap-[12px] items-center w-full">
              <div className="flex justify-between w-full px-[16px]">
                <p className="w-full text-center">Conversations</p>
                <img src={cancel} alt="Background" />
              </div>
              <img src={border} alt="border" />
            </div>
          </div>
          {/* conversation */}
          <div className="h-[80%] relative">
            <div
              ref={chatContainerRef}
              className="h-[80%] flex flex-col gap-8 items-end w-full overflow-y-auto"
            >
              {/* current host */}
              <div className="flex flex-col justify-end items-end w-auto max-w-[70%]">
                <p>08:15</p>
                <div className="rounded-[20px] py-[18px] px-[22px] bg-grise">
                  <p>Salut à tous</p>
                </div>
              </div>
              {/* reponse from user */}
              <div className="relative flex items-start w-auto">
                <div className="absolute profile rounded-full p-2">
                  <img src={avatar2} alt="avatar" className="" />
                </div>

                <div className="flex flex-col justify-start items-start">
                  <p className="pl-[56px]">08:16</p>
                  <div className="rounded-[20px] py-[18px] pl-[56px] pr-[22px] responseBg">
                    <p>Salut vous, vous m’entendez bien?</p>
                  </div>
                </div>
              </div>
              {/* current host */}
              <div className="flex flex-col justify-end items-end w-auto max-w-[70%]">
                <p>08:17</p>
                <div className="rounded-[20px] py-[18px] px-[22px] bg-grise">
                  <p>Oui c’est OK ici</p>
                </div>
              </div>
              {/* reponse from user */}
              <div className="relative flex items-start w-auto">
                <div className="absolute profile rounded-full p-2">
                  <img src={avatar2} alt="avatar" className="" />
                </div>

                <div className="flex flex-col justify-start items-start">
                  <p className="pl-[56px]">08:18</p>
                  <div className="rounded-[20px] py-[18px] pl-[56px] pr-[22px] responseBg">
                    <p>Salut vous, vous m’entendez bien?</p>
                  </div>
                </div>
              </div>
              {/* current host */}
              <div className="flex flex-col justify-end items-end w-auto max-w-[70%]">
                <p>08:19</p>
                <div className="rounded-[20px] py-[18px] px-[22px] bg-grise">
                  <p>Tout le monde est là alors on peut commencer</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 py-8 w-full">
              <Input
                size="large"
                placeholder="Tapez votre message"
                prefix={<img src={smiley} alt="avatar" className="" />}
                suffix={<img src={send} alt="avatar" className="" />}
                className="rounded-full bg-search border-0 py-[8px] px-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
