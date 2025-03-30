# [Old] Frontend Documentation

The backend is written using vanilla PHP. Source is located at `public/api/` folder. 

Frontend is written using React.js and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Source is located at `src/` folder. Styling is done using `semantic-ui-react` and `styled-components`. All styling related code is inside `/theme`.

## Routes

- `/` - homepage and also Qube creation route
- `/respond` - responding yes or no to Qube. Ideally the url would looks something like this eventually `/respond/unique-id` to be able to fetch a specific qube from the backend
- `/edit` - editing a Qube after responding yes to a qube. Ideally the url would looks something like this eventually `/edit/unique-id` to be able to fetch a specific qube from the backend

## Object structure

Since there is no backend yet to communicate with, all data is kept in component state. Which means that if you refresh, the data is lost. The info saved between creating and editing screens in passed around using this object:

```
interface IQube {
  organizer: string;
  guests: string[];
  dates: IDate[];
  location: string;
  toBring?: string[];
  alreadyHave?: string[];
  note?: string;
}
```
