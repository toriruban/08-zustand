"use client";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote } from '../../lib/api';
import css from './NoteForm.module.css';
import { useRouter } from 'next/navigation';
import { NoteTag } from '../../types/note';

export default function NoteForm() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      router.push('/notes/filter/All')
    },
  });

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as {
     title: string,
     content: string,
     tag: NoteTag
    };
    mutation.mutate(values)
  }

  return (
    <form action={handleSubmit} className={css.form}>
    <div className={css.formGroup}>
         <label htmlFor="title">Title</label>
         <input id="title" 
                name="title" 
                type="text" 
                className={css.input} 
                required 
                minLength={3} 
                maxLength={50}/>
    </div>

    <div className={css.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows={8}
            maxLength={500}
            className={css.textarea}
          />
    </div>

    <div className={css.formGroup}>
          <label htmlFor="tag">Tag</label>
          <select id="tag" name="tag" className={css.select} required>
            <option value="">Choose tag</option>
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>

        <div className={css.actions}>
          <button 
                type="button" 
                className={css.cancelButton} 
                onClick={() => router.back()}>
            Cancel
          </button>
          <button type="submit" className={css.submitButton} >
            Create note
          </button>
        </div>
</form>
);
}