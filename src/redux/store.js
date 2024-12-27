import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  projects: {
    selectProject: {
      id: '',
      label: '',
      client: '',
      img: '',
      service: '',
      description1: '',
      description2: '',
      title1: '',
      title2: '',
      title3: '',
      categories: [''],
      link: '',
      colorTitle: '',
      images: {
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
      },
    },
  },
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'projects/selectProject': {
      return {
        ...state,
        projects: {
          selectProject: action.payload,
        },
      }
    }

    default:
      return state
  }
}

export const store = configureStore({
  reducer: rootReducer,
})
