import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Climb { 

  @PrimaryColumn()
  id: string;

  @Column()
  userId: number;

  @Column()
  data: string; 

  @Column()
  miejsce: string; 

  @Column()
  droga: string; 

  @Column()
  opis: string; 

  @Column()
  wycena: string; 

}