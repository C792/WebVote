import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";
function Vote1() {
  console.log('1');
}
function Vote2() {
  console.log('2');
}
// let jsonTest = {
//   no : 1,
//   productName : "컴퓨터",
//   price : 200000
// };

// ('private/vote.json').val(JSON.stringify(jsonTest));
// let data = JSON.parse(('private/vote.json').val()); 

export default function Home() {
  const { register } = useForm();
  return (
    <div>
    <form>
      <h2>개인 번호와 사유를 쓰세요</h2>
      {/* <input {...register("id")} type="text" placeholder="ID" />
      <input {...register("pw")} type="password" placeholder="PW" />
      <input {...register("age")} type="number" placeholder="AGE" />
      <input type="submit" /> */}
      <input {...register("id")} type="text" placeholder='ID' />
      <hr/>
      <input {...register("reason")} type="text" placeholder='사유' />   
      <hr/>
    </form>
    <section>
      <button onClick={Vote1}>임준규</button>
      <button onClick={Vote2}>정준호</button>
      
    </section>
    </div>
  )
}
