import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRandomElementFromArray } from "../utils/getRandomElementFromArray";
import { games } from "../games";

export enum EScreen {
  Start = "Start",
  Cards = "Cards",
  Timer = "Timer",
  SpyTest = "SpyTest",
}

export interface IGame {
  title: string;
  roles: string[];
  answerOptionsForSpyTest: string[];
}

export interface IStore {
  screen: EScreen;
  playersNumber: number;
  game: IGame;
}

const initialState: IStore = {
  screen: EScreen.Start,
  playersNumber: 4,
  game: {
    title: "",
    roles: [],
    answerOptionsForSpyTest: [],
  },
};

const slice = createSlice({
  name: "gameConfig",
  initialState,
  reducers: {
    changePlayersNumber(store, action: PayloadAction<number>) {
      return {
        ...store,
        playersNumber: action.payload,
      };
    },
    startGame(store) {
      return {
        ...store,
        screen: EScreen.Cards,
        game: getRandomElementFromArray(games),
      };
    },
    changeScreen(store, action: PayloadAction<EScreen>) {
      return {
        ...store,
        screen: action.payload,
      };
    },
  },
});

export const gameActions = slice.actions;
export const gameReducer = slice.reducer;
