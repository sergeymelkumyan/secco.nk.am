<?php

namespace Modules\Ui\Http\Middleware;

use Closure;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class ApiLocalization
{
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle(Request $request, Closure $next)
    {
        $locale = $request->header('Content-Language');

        if (!$locale) {
            $locale = $this->app->config->get('app.locale');
        }

        if (!array_key_exists($locale, config('ui.supported-languages'))) {
            return abort(403, 'Language not supported.');
        }

        $this->app->setLocale($locale);

        $response = $next($request);

        $response->headers->set('Content-Language', $locale);

        return $response;
    }
}
