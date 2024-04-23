import React from 'react';
export type WeatherImagePropsType = {
    weatherDescription: string
}
 export const WeatherImage = ({weatherDescription}: WeatherImagePropsType) => {
     let weatherImageSrc = '';
     switch (weatherDescription.toLowerCase()) {
         case 'clear sky':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Sun_Weather_Icon_PNG_Clip_Art-1517.png';
             break;
         case 'broken clouds':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Clouds_Weather_Icon_PNG_Clip_Art-1508.png';
             break;
         case 'overcast clouds':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Clouds_Weather_Icon_PNG_Clip_Art-1508.png';
             break;
         case 'thunderstorm':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Thundery_Showers_Weather_Icon_PNG_Clip_Art-1520.png';
             break;
         case 'light rain':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Rain_Cloud_Weather_Icon_PNG_Clip_Art-1521.png';
             break;
         case 'moderate rain':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Rain_Cloud_Weather_Icon_PNG_Clip_Art-1521.png';
             break;
         case 'heavy rain':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Rain_Cloud_Weather_Icon_PNG_Clip_Art-1521.png';
             break;
         case 'light snow':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Rain_Cloud_Weather_Icon_PNG_Clip_Art-1521.png';
             break
         case 'moderate snow':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Snowy_Cloud_Weather_Icon_PNG_Clip_Art-1503.png';
             break;
         case 'scattered clouds':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Snowy_Cloud_Weather_Icon_PNG_Clip_Art-1503.png';
             break;
         case 'few clouds':
             weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Clouds_Weather_Icon_PNG_Clip_Art-1508.png';
             break
         default:
             weatherImageSrc = '';
     }
    return (
        <img src={weatherImageSrc} alt={weatherDescription}/>
    );
};

