import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/deviceFiles')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/deviceFiles"!</div>
}
