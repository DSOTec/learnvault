import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorStateProps {
	message?: string
	onRetry?: () => void
}

export function ErrorState({
	message = "Something went wrong.",
	onRetry,
}: ErrorStateProps) {
	return (
		<div className="flex flex-col items-center justify-center py-16 text-center">
			<AlertCircle className="h-12 w-12 text-destructive mb-4" />
			<h3 className="text-lg font-semibold">Failed to load</h3>
			<p className="text-sm text-muted-foreground mt-1 max-w-sm">{message}</p>
			{onRetry && (
				<Button variant="outline" className="mt-4" onClick={onRetry}>
					Try again
				</Button>
			)}
		</div>
	)
}

// ### Step 3 — Update Each Page

// For each page, the pattern is:
// if (isLoading) → show skeleton
// if (isError)   → show <ErrorState onRetry={refetch} />
// if (data.length === 0) → show <EmptyState ... />
// else → render the list
