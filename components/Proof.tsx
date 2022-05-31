import { PropsWithChildren } from 'react'

type ProofPros = PropsWithChildren<{
    readonly tombstone?: boolean | 'fill'
}>

const Proof = ({ children, tombstone = false }: ProofPros) => (
    <div className='prose text-inherit bg-gray-200 dark:bg-blue-600 border-orange-900 border-l-8 p-4'>
        <h2 className='mt-0 text-inherit'>Proof</h2>
        {children}
        {tombstone && (
            <div className='flex justify-end'>
                <svg
                    width='1rem'
                    height='1rem'
                >
                    <rect
                        width='1rem'
                        height='1rem'
                        fill={tombstone === 'fill' ? 'currentColor' : 'none'}
                        stroke='currentColor'
                        strokeWidth={'0.15rem'}
                    ></rect>
                </svg>
            </div>
        )}
    </div>
)

export default Proof
