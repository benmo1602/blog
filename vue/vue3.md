### setup
调用时机

创建组件实例，然后初始化 props ，紧接着就调用setup 函数。从生命周期钩子的视角来看，它会在 beforeCreate 钩子之前被调用

参数
props  // 不可以解构  可以 watch watchEffect

context   // 可以解构
context.attrs
context.slots
context.emit

出于一些原因将 props 作为第一个参数，而不是包含在上下文中：

组件使用 props 的场景更多，有时候甚至只使用 props

将 props 独立出来作为第一个参数，可以让 TypeScript 对 props 单独做类型推导，不会和上下文中的其

interface Data {
  [key: string]: unknown
}

interface SetupContext {
  attrs: Data
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void
}

function setup(props: Data, context: SetupContext): Data
