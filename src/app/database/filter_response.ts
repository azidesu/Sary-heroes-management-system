import { Filter } from "../Models/Filter";

export const filters: Filter[] = [
    {
        title: 'Email',
        type: 'text'
      },
        {
        title: 'Phone',
        type: 'text'
      },
        {
        title: 'Name',
        type: 'text'
      },
        {
        title: 'Company',
        type: 'text'
      },
     {
        title: 'country',
        type: 'dropdown',
        api: 'http://countryapi.gear.host/v1/Country/getCountries?pLimit=25&pPage=1',
        multiple: false,
      }, 
    // {
    //   title: 'country',
    //   type: 'dropdown',
    //   api: 'https://gonsole.com/app/location/load-cities.php',
    //   multiple: false,
    // }, 
        {
        title: 'Date',
        type: 'date'
      }
]