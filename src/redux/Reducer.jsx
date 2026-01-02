import { produce } from "immer";
import { id } from "./action";

const initialisation = { ids: 0 };

export default function Reducer(state = initialisation, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case id:
        draft.ids = action.payload;
        break;
      default:
        break;
    }
  });
}
