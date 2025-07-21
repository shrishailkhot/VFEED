
import React,{ useState} from 'react';
import MenuCard from './MenuCard';
import { 
  FormControl, 
  Grid, 
  Typography, 
  RadioGroup, 
  Radio,
  FormControlLabel,
  Divider
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const categories = [
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"
]

const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian only",value:"vegetarian"},
    {label:"Non-Vegetarian", value:"non_vegetarian"},
    {label:"Seasonal",value:"seasonal"}
];

const menu = [1,1,1,1,1,1,]



const RestaurantDetails = () => {
    const [foodType,setFoodType] = useState("all")
    const handleFilter = (e) =>{
        console.log(e.target.value,e.target.name)
    }
  return (
    <div className='px-5 lg:px-20'>
        
        <section>
            <h3 className='text-gray-500 py-2  pt-10'>Home/india/indian facst food/3</h3>
            <div>
                <Grid container spacing={2}>

                    <Grid item xs={12}>

                    <img className="w-full h-[40vh] object-cover"
                    src="/restaurant/cafe1.jpg" 
                    alt="" />
                    
                    </Grid>
                       
                    <Grid item xs={12} lg={6}>

                        <img className="w-full h-[40vh] object-cover"
                        src="/restaurant/bar-826688_1920.jpg" 
                        alt="" />
                        
                    </Grid>
                    <Grid item xs={12} lg={6}>

                        <img className="w-full h-[40vh] object-cover"
                        src="/restaurant/city-4298285_1280.jpg" 
                        alt="" />
                        
                    </Grid> 
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quidem consectetur inventore possimus reprehenderit est laudantium, sequi error sit accusantium quibusdam, facilis aliquid vero obcaecati sint minus consequuntur beatae impedit!</p>


                <div space-y-3 mt-3>

                    <p className='text-gray-500 flex  items-center gap-3 mb-4 mt-4'>
<LocationOnIcon/>
                    <span>
                      Mumbai, Maharashtra
                    </span>
                </p>
                <p className='text-gray-500 flex  items-center gap-3'>
<CalendarTodayIcon/>
                    <span>
                      Mon-Sun: 9:00AM - 9:00PM (Today)
                    </span>
                </p>
                </div>
            </div>
        </section>

        {/* <Divider/> */}

        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter '>
               <div className='box space-y-5 lg:sticky top-28 p-5 shadow-md'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                             Food Type
                        </Typography>
                        
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {foodTypes.map((item) => 
                                <FormControlLabel 
                                key={item.value}
                                    value={item.value} 
                                    control={<Radio/>}
                                    label={item.label}/>)}
                            </RadioGroup>
                        </FormControl>
                           
                    </div>
                    <Divider/>
                     <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                             Food Category
                        </Typography>
                        
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {categories.map((item) => 
                                <FormControlLabel 
                                key={item}
                                    value={item} 
                                    control={<Radio/>}
                                    label={item}/>)}
                            </RadioGroup>
                        </FormControl>
                           
                    </div>

               </div>

            </div>
             <div className='space-y-5 lg:w-[80%] lg:pl-10'>
{menu.map((item) => <MenuCard/>)}

            </div>
        </section>
    </div>
  )
}
//rafce

export default RestaurantDetails