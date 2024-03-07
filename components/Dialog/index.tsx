import * as DialogPrimitive from '@radix-ui/react-dialog'

interface DialogProps {

}
export default function Dialog({ children }: React.PropsWithChildren<DialogProps>) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        { children }
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Content style={{ maxWidth: 450 }}>
        <DialogPrimitive.Title>Edit profile</DialogPrimitive.Title>
        <DialogPrimitive.Description mb="4" size="2">
          Make changes to your profile.
        </DialogPrimitive.Description>
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
  )
}
