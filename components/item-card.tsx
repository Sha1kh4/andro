import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useCustomerStore } from "@/stores/userdata-store"

export function ItemCard({ id, image, title, price }: { id: number, image: string, title: string, price: number }) {
  const addItems = useCustomerStore((state) => state.addItems)

  const handleAddToCart = () => {
    addItems({
      id,
      Image: image,
      Title: title,
      price,
    })
  }

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <img
        src={image}
        alt={title}
        className="relative z-20 aspect-video w-full object-contain p-4"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">${price}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
