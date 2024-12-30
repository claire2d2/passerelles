import './index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Session } from '@supabase/supabase-js'

import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'

import Homepage from './pages/Homepage'
import All from './pages/All'
import Add from './pages/Add'
import About from './pages/About'

const supabaseURL : string = import.meta.env.VITE_SUPABASE_URL || "http://localhost/3000"
const supabaseAnonKey : string = import.meta.env.VITE_SUPABASE_ANON_KEY || ""

const supabase = createClient(supabaseURL, supabaseAnonKey)

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    console.log(session)
  }
  ,[session])
  
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="signup" element={<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />}/>
          <Route index element={<Homepage/>}/>
          <Route path="/all" element={<All/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/about" element={<About/>}/>
      </Route>

    </Routes>
    </div>
  )
} 

 