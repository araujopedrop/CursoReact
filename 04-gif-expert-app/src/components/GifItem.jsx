import React from 'react'

export const GifItem = ({title, url, id}) => {

  console.log({title, url, id});

  const finalUrl = `https://media.giphy.com/media/${id}/giphy.gif`;
  return (
    <div className="card">
        <img src={finalUrl} alt={title}/>
        <p>{ title }</p>
    </div>
  )
}
 