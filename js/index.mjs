import * as handlers from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";

const path = location.pathname;


if (path === "index.html") {
  templates.allListingsTemplate();
} else if (path === "/NEXT-Auction-House/login/index.html") {
  handlers.setLoginFormListener();
} else if (path === "/NEXT-Auction-House/register/index.html") {
  handlers.setRegisterFormListener();
} else if (path === "/NEXT-Auction-House/profile/index.html") {
  templates.profileTemplate();
  templates.listingsTemplate();
}
