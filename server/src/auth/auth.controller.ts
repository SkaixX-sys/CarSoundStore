import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { SignInBodyDto, SignUpBodyDto, getSessionInfoDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Response } from 'express'
import { CookieService } from './cookie.service';
import { AuthGuard } from './auth.guard';
import { SessionInfo } from './session-info.decorator';

@Controller('auth')
@ApiTags('auth api')
export class AuthController {
    constructor(
        private authService: AuthService,
        private cookieService: CookieService
    ) { }

    @Post('sign-up')
    @ApiCreatedResponse()
    async signUp(@Body() body: SignUpBodyDto, @Res({ passthrough: true }) res: Response) {
        const { accessToken } = await this.authService.signUp(body.email, body.password)

        this.cookieService.setToken(res, accessToken)
    }

    @Post('sign-in')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() body: SignInBodyDto, @Res({ passthrough: true }) res: Response) {

        const { accessToken } = await this.authService.signIn(body.email, body.password)

        this.cookieService.setToken(res, accessToken)
    }


    @Post('sign-out')
    @ApiOkResponse()
    @UseGuards(AuthGuard)
    signOut(@Res({ passthrough: true }) res: Response) {
        this.cookieService.removeToken(res)
    }

    @Get('session')
    @ApiOkResponse({
        type: getSessionInfoDto
    })
    @UseGuards(AuthGuard)
    getSessionInfo(@SessionInfo() session: getSessionInfoDto) {
        return session
    }
}





