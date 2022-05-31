//Import Images
import mountain from "./img/MountainOne.jpg";
import forest from "./img/ForestOne.jpg";
import lake from "./img/LakeOne.jpg";
import mountainTwo from "./img/MountainTwo.jpg";
import forestTwo from "./img/ForestTwo.jpg";
import lakeTwo from "./img/LakeTwo.jpg";

export const MovieState = () => {
  return [
    {
      title: "Explore mountains",
      mainImg: mountain,
      secondaryImg: mountainTwo,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly masterpiece",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Fresh look on a nature.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Innocence.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
    {
      title: "Explore lakes",
      mainImg: lake,
      url: "/work/good-times",
      secondaryImg: lakeTwo,
      awards: [
        {
          title: "Truly masterpiece",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Fresh look on a nature.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Innocence.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
    {
      title: "Explore forests",
      mainImg: forest,
      url: "/work/the-racer",
      secondaryImg: forestTwo,
      awards: [
        {
          title: "Truly masterpiece",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Fresh look on a nature.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Innocence.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
  ];
};