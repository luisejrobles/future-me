import mixpanel from "mixpanel-browser";
const REACT_APP_MIXPANEL = process.env.REACT_APP_MIXPANEL;
mixpanel.init(REACT_APP_MIXPANEL, {
  debug: true,
  ignore_dnt: true,
});

// let env_check = process.env.NODE_ENV === "production" || "dev";

let actions = {
  identify: (id) => {
    mixpanel.identify(id);
  },
  alias: (id) => {
    mixpanel.alias(id);
  },
  track: (name, props) => {
    mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;
