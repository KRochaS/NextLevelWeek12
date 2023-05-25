'use client'

import { ChangeEvent, useState } from 'react'

// Quando o componente precisa de interatividade
// com o usuário em tempo real, exige JS é
// preciso usar uma diretiva chamada 'use client'
// ou seja, que o componente precisa de JS no lado do navegador
// então, é necessário encapsular o componente apenas que
// precisa dessa interatividade

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  function onMediaSelect(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }
  return (
    <>
      <input
        onChange={onMediaSelect}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspec-video w-full rounded-lg object-cover"
        ></img>
      )}
    </>
  )
}
