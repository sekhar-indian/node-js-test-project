console.log()


async function firstForm(event){
    event.preventDefault();

    const data={
        company:event.target.comapny.value,
        pros:event.target.pros.value,
        cons:event.target.cons.value,
        rating:event.target.rating.value
    }
    console.log(data)

    await axios
        .post('http://localhost:3000/datapost',data)
        .then(res=>console.log('ok'))
        .catch(err=>console.log('err'))
}

async function secondForm(event){
    event.preventDefault();
    const companyname={
        companyname:event.target.company.value
    }
    console.log(companyname)
    
   await axios
    .post(`http://localhost:3000/companyreview`,companyname)
    .then(re=>{
        let e=document.getElementById('dataelement');
        e.innerHTML=`<h1 id=${re.data.foundCompany.id}> ${re.data.foundCompany.company}</h1>`;
        let t=document.createElement('div')
        for(let i=0;i<re.data.companyReview.length;i++){
            let review = re.data.companyReview[i];
            let reviewDiv = document.createElement('div');
            reviewDiv.innerHTML = `
                <div class='review-container'>
                    <p>Cons: ${review.cons}</p>
                    <p>Pros: ${review.pros}</p>
                    <p>Rating: ${review.rating}</p>
                </div>`;
            t.appendChild(reviewDiv);
        }
        e.appendChild(t)
        console.log(re)

    })
    .catch(er=>console.log(er))

}


