import { IsNotEmpty } from 'class-validator';

/**
 * @export
 * @class ValidationDto
 */
export class ValidationDto {
  @IsNotEmpty()
  source_type: string;

  @IsNotEmpty()
  source_id: number;

  valid_upto: number;
  token: string;

  verified_at: string;

  @IsNotEmpty()
  type_id: number;
}
