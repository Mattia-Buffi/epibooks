import React from 'react'
import { useEffect,useState } from 'react'
import { Modal } from 'react-bootstrap'
import SingleComment from './SingleComment'
import SkeletonComment from './SkeletonComment'
import AddComment from './AddComment'

export default function CommentArea({asin,title,showReview,functionShow}) {
    const [isLoading,setIsLoading]=useState(true)
    const [commentsList,setCommentsList]=useState([])
    const [newComment,setNewComment]=useState({"elementId":asin});
    //Endpoint
const prodAPI='https://striveschool-api.herokuapp.com/api';
const idAPI='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0N2Q4MTljNDM3MDAwMTkzYzM1ODYiLCJpYXQiOjE3MTA5NDcyODUsImV4cCI6MTcxMjE1Njg4NX0.-DYQq1xATYFJ21cVJHxqZR-SBwBGUUPVvuHuSroUo_E';
const depedApi={
    headers:{"Authorization":idAPI,"content-type":"application/JSON"}
}
async function downLoadComment(){
    setIsLoading(true);
    try {let response=await fetch(prodAPI+'/books/'+asin+'/comments',depedApi)
    let listComment= await response.json();
    setCommentsList(listComment);
    setIsLoading(false);
    console.log('fetch ok');
    
} catch (error) {
    console.error(error) ;
}
}
async function upLoad(){
    let body={method:"POST", body:JSON.stringify(newComment),...depedApi}
    console.log(body);
    try {let response = await fetch(prodAPI+'/comments',body)
    
    if(response.ok) console.log('commento salvato');
        
    } catch (error) {
        console.error(error)
    }

}
useEffect(()=>{
    downLoadComment()
},[])
useEffect(()=>{
    upLoad()
    downLoadComment()
},[newComment])
    return (
    <Modal show={showReview} onHide={functionShow}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {isLoading && (Array(4).fill(0).map(((el,i)=><SkeletonComment key={i}/>)))}
        {!isLoading && (
            commentsList.map(el=><SingleComment key={el._id} commento={el}/>))}
        </Modal.Body>
        <Modal.Body>
          <AddComment newComment={newComment} saveComment={setNewComment} upLoad={upLoad}/>
        </Modal.Body>
    </Modal>
  )
}
