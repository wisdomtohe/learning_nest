import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { FreelancerModule } from './freelancer/freelancer.module';
import { ClientModule } from './client/client.module';
import { CompanyModule } from './company/company.module';
import { SkillModule } from './skill/skill.module';
import { PaymentTypeModule } from './payment-type/payment-type.module';
import { CertificationModule } from './certification/certification.module';
import { TestModule } from './test/test.module';
import { TestResultModule } from './test-result/test-result.module';
import { JobModule } from './job/job.module';
import { ExpectedDurationModule } from './expected-duration/expected-duration.module';
import { ComplexityModule } from './complexity/complexity.module';
import { MessageModule } from './message/message.module';
import { PropositionModule } from './proposition/proposition.module';
import { ContratModule } from './contrat/contrat.module';
import { StatutPropositionModule } from './statut-proposition/statut-proposition.module';

import { AttachmentModule } from './attachment/attachment.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [TypeOrmModule.forRoot(),
    UserModule, AuthModule, TodoModule,
    FreelancerModule,
    ClientModule,
    CompanyModule,
    SkillModule,
    PaymentTypeModule,
    CertificationModule,
    TestModule,
    TestResultModule,
    JobModule,
    ExpectedDurationModule,
    ComplexityModule,
    MessageModule,
    PropositionModule,
    ContratModule,
    StatutPropositionModule,
    AttachmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
