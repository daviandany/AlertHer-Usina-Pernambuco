import { supabase } from '../supabase/supabase.js'

export const createUser = async ({ name, email, password }) => {
    const { data, error } = await supabase
        .from('User')
        .insert([{ name, email, password }])
        .select()
    return { data, error }
}

export const getUserByID = async (email) => {
    const { data, error } = await supabase
        .from('User')
        .select('*')
        .eq('email', email)
        .single()
    return { data, error }
}
