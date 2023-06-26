import { api } from '@/lib/api'
import dayjs from 'dayjs'
import en from 'dayjs/locale/en'
import utc from 'dayjs/plugin/utc'
import { cookies } from 'next/headers'
import Image from 'next/image'

dayjs.locale(en)
dayjs.extend(utc)
interface Params {
  params: {
    memoryId: string
  }
}

interface Memory {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

export default async function MemoryDetailsPage({ params }: Params) {
  const token = cookies().get('token')?.value
  const response = await api.get<Memory>(`/memories/${params.memoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory = response.data

  return (
    <div className="flex flex-col gap-10 p-8">
      <div key={memory.id} className="space-y-4">
        <time className="text-small -ml-8 flex items-center gap-2 text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {' '}
          {dayjs.utc(memory.createdAt).locale('en').format('MMMM D, YYYY')}
        </time>

        <Image
          className="aspect-video w-full rounded-lg object-cover"
          src={memory.coverUrl}
          alt="image"
          width={592}
          height={280}
        />

        <p className="text-lg leading-relaxed text-gray-100">
          {memory.content}
        </p>
      </div>
    </div>
  )
}
