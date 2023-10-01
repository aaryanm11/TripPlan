import Card from './Card'
function Tours({tours,removeTour,removeRemTour}) {
   return (
    <div className='container'>
      <div className='title'>
         <h2>Plan With Aaryan</h2>
      </div>
      <div className='cards'>{
tours.map((tour)=>{
   return <Card key={tours.id} {...tour} removeTour={removeTour} removeRemTour={removeRemTour}></Card>
})
      }

      </div>
    </div>
   )
}

export default Tours;