import { type RouteDefinition } from './RouterProvider'
import LandingPage from '../pages/LandingPage'
import { ExploreDeliveryPlaybookPage } from '../pages/ExploreDeliveryPlaybook'
import { PlanWorkflowPage } from '../pages/PlanWorkflow'

export const routes: RouteDefinition[] = [
  { path: '/', element: <LandingPage /> },
  { path: '/explore-delivery-playbook', element: <ExploreDeliveryPlaybookPage /> },
  { path: '/plan-my-workflow', element: <PlanWorkflowPage /> },
]
