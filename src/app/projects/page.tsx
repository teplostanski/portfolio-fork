import PreviewList from '@/components/PreviewList/PreviewList'
import getMarkdownData from '@/shared/utils/getMarkdownData'

export default function HomePageRu() {
  const data = getMarkdownData('content/projects/ru')

  return (
    <main>
      <PreviewList data={data} />
    </main>
  )
}