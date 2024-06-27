

function firstForm(event){
    event.preventDefault();

    const data={
        comapny:event.target.comapny.value,
        pros:event.target.pros.value,
        cons:event.target.cons.value,
        rating:event.target.rating.value
    }
    console.log(data)
}