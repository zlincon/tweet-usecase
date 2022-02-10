import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailListService } from './mail-list.service';

@Processor('emails')
export class SendMailTweetsJob {
  constructor(private mailListService: MailListService) {}

  @Process()
  async handle(job: Job) {
    const mailList = await this.mailListService.findOne();
    // connect to kafka to send message
  }
}
