const search_country=()=>
{
      const search_item = document.getElementById("search-items").value.toUpperCase();
      const countries=document.querySelectorAll(".country");
      countries.forEach((country) => {
            const countryName = country.getElementsByTagName('h2')[0].textContent.toUpperCase();
            
            if (countryName.includes(search_item)) {
                  country.style.display="flex"
            }
            else 
            country.style.display="none"
});

}

const filter_country=()=>
{
      const continent=document.getElementById('items').value;
     
      const allCountries=document.querySelectorAll('.country');
      allCountries.forEach((country)=>{
            
            const selectedCountry=country.querySelector('.country-details');
            const continentName = selectedCountry.getElementsByTagName('h3')[1].innerHTML;
            if (continentName.includes(continent) || continent==="Remove Filter") {
                  
                  country.style.display="flex";
            }
            else 
            country.style.display="none";
});  
}
const countries_container=document.querySelector('.countries-container');
document.addEventListener("DOMContentLoaded", ()=>{
      fetch('data.json')
      .then(response=>response.json())
      .then(data=>addCountries(data))
});
const addCountries=(data)=>{
      
      data.forEach((country)=>{
            const element=document.createElement('div');
            element.classList.add('country');
            
            const country_image=document.createElement('img');
            country_image.src=country.flag;
            country_image.className="country_img";
            element.appendChild(country_image);

            const country_details=document.createElement('div');
            country_details.className="country-details";
            const country_name=document.createElement('h2');
            country_name.innerHTML=country.name;
            country_details.appendChild(country_name);

            const populationValue = country.population >= 1000000
            ? `${(country.population / 1000000).toFixed(2)} M`
            : `${(country.population / 1000).toFixed(2)} K`;
            const population=document.createElement('h3');
            population.innerHTML=`<span class="population">Population:</span> ${populationValue}`;
            country_details.appendChild(population);

            const continent=document.createElement('h3');
            continent.innerHTML=`<span class="region">Region:</span> ${country.region}`;
            country_details.appendChild(continent);

            const capital=document.createElement('h3');
            capital.innerHTML=`<span class="capital">Capital:</span> ${country.capital}`;
            country_details.appendChild(capital);


            element.appendChild(country_details);
            countries_container.appendChild(element);
      });
}