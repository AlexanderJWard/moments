import { rest } from "msw";

const baseURL = "https://ajw-drf-api.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "peterthedragon",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image:
          "https://res.cloudinary.com/dujsv2f79/image/upload/v1/media/images/Screenshot_20230125_092140_bs0pdw",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
    return res(ctx.status(200));
  })
];
