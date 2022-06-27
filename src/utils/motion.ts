export const variants = {
  tabHidden: {
    y: 30,
    opacity: 0,
  },
  tabVisible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },

  tabXHidden: {
    x: 30,
    opacity: 0,
  },
  tabXVisible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },

  searchFieldHidden: {
    y: -5,
    opacity: 0,
  },
  searchFieldVisible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },

  overlayCardHidden: {
    y: "100%",
    opacity: 0,
  },
  overlayCardVisible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
    },
  },

  contentHidden: {
    x: "100%",
    opacity: 0,
  },
  contentVisible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
    },
  },

  overlayFieldHidden: {
    y: 10,
    opacity: 0,
  },
  overlayFieldShow: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },

  formMessageCustomHidden: {
    x: "100%",
    opacity: 0,
  },
  formMessageCustomVisible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
    },
  },

};
