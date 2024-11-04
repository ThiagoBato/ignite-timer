import { useContext } from 'react';
import { HandPalm, Play } from 'phosphor-react'
import * as zod from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { NewCycleForm } from './components/NewCycleForm';
import { Countdown } from './components/Countdown';
import { CyclesContext } from '../../contexts/CyclesContext';

import { HomeContainer, StartCountdownButton, StopCountdownButton } from './styles'

const Home = () => {
  const {activeCycle, createNewCycle, interruptCurrentCycle}= useContext(CyclesContext);

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
      .step(5)
  })
  
  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  });

  function handleCreateNewCycle (data: NewCycleFormData){
    createNewCycle(data);
    reset();
  }

  const {handleSubmit, watch, reset} = newCycleForm;

  const task = watch('task');
  const isSubmitDisable = !task;
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}> 
        
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
            
        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ):(
          <StartCountdownButton type="submit" disabled={isSubmitDisable}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}

export default Home