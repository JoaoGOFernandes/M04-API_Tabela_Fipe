const brandChoose = document.querySelector("#brand")
const url=`https://parallelum.com.br/fipe/api/v1/carros/marcas`

const getBrands = async () => {
    const response = await fetch(url)
    const brands = await response.json()
  
    const optionBrands = brands.reduce((accumulator, brand) =>{
        accumulator += `<option value="${brand.codigo}">${brand.nome}</option>`
        return accumulator
    },'')
    const selectBrand = document.querySelector("#brand")

    selectBrand.innerHTML = optionBrands
    
}

getBrands()


getOption = () => {
    output = brandChoose.value
    console.log(output);
}


const getvehicles = async () => {
    const response = await fetch(`${url}/${output}/modelos`)
    const brands = await response.json()
  
    const optionBrands = brands.reduce((accumulator, brand) =>{
        accumulator += `<option value="${brand.codigo}">${brand.nome}</option>`
        return accumulator
    },'')
    const selectBrand = document.querySelector("#brand")

    selectBrand.innerHTML = optionBrands
    
}



// output = brandChoose.value
// console.log(output);








 



