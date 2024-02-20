import React from "react";
import { Mixpanel } from "../../mixpanel";

const ParrotLogin = () => {
  Mixpanel.track("page_viewed", {
    page_name: "[Parrot] Login",
  });

  function loginLuis() {
    Mixpanel.identify("001");
    Mixpanel.people.set({
      $city: "Benito Juárez",
      $email: "luis@hola.com",
      $name: "Luis",
    });
    Mixpanel.track("login_button", {
      user: "Luis",
    });
    console.log("hola luis");
  }
  function logoutLuis() {
    Mixpanel.people.reset();
    console.log("adiós luis");
  }

  function loginDupi() {
    Mixpanel.identify("002");
    Mixpanel.people.set({
      $city: "Cuauhtémoc",
      $email: "dupi@hola.com",
      $name: "Dupi",
    });
    Mixpanel.track("login_button", {
      user: "Dupi",
    });
    console.log("hola Dupi");
  }
  function logoutDupi() {
    Mixpanel.people.reset();
    console.log("adiós Dupi");
  }

  function loginAle() {
    Mixpanel.identify("003");
    Mixpanel.people.set({
      $city: "Guadalajara",
      $region: "Jalisco",
      $email: "ale@hola.com",
      $name: "Ale",
    });
    Mixpanel.track("login_button", {
      user: "Ale",
    });
    console.log("hola Ale");
  }
  function logoutAle() {
    Mixpanel.people.reset();
    console.log("adiós Ale");
  }
  return (
    <div className="text-l justify-center text-center text-indigo-300 h-full flex flex-col ">
      <button
        onClick={() => loginLuis()}
        className="bg-green-500 cursor-not-allowed self-center h-9 w-11/12 rounded-md text-white font-bold "
      >
        Login usuario Luis{" "}
      </button>
      <button
        onClick={() => logoutLuis()}
        className="bg-red-300 cursor-not-allowed self-center h-9 w-11/12 rounded-md text-white font-bold "
      >
        Logout usuario Luis{" "}
      </button>
      <button
        onClick={() => loginDupi()}
        className="bg-green-500 cursor-not-allowed self-center h-9 w-11/12 rounded-md text-white font-bold "
      >
        Login usuario Dupi{" "}
      </button>
      <button
        onClick={() => logoutDupi()}
        className="bg-red-300 cursor-not-allowed self-center h-9 w-11/12 rounded-md text-white font-bold "
      >
        Logout usuario Dupi{" "}
      </button>
      <button
        onClick={() => loginAle()}
        className="bg-green-500 cursor-not-allowed self-center h-9 w-11/12 rounded-md text-white font-bold "
      >
        Login usuario Ale{" "}
      </button>
      <button
        onClick={() => logoutAle()}
        className="bg-red-300 cursor-not-allowed self-center h-9 w-11/12 rounded-md text-white font-bold "
      >
        Logout usuario Ale{" "}
      </button>
    </div>
  );
};

export default ParrotLogin;
