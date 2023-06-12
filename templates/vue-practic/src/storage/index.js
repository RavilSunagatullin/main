import { createStore } from "vuex";
import { postMoudule } from "./postMoudule";

export default createStore({
    modules:{
        post: postMoudule
    }
}) 